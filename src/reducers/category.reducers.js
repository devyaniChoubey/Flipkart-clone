import { categoryConstants } from "../actions/constants"


const initState = {
    categories: [],
    loading: false,
    error: null
}

// const buildNewCategories = (parentId, categories, category) => {
//     let myCategories = [];

//     for (let cat of categories) {

//         if (cat._id == parentId) {
//             myCategories.push({
//                 ...cat,
//                 children: cat.children && cat.children.length > 0 ? buildNewCategories(parentId, [...cat.children, {
//                     _id: category._id,
//                     name: category.name,
//                     slug: category.slug,
//                     parentId: category.parentId,
//                     children: category.children
//                 }], category) : []
//             })
//         } else {
//             myCategories.push({
//                 ...cat,
//                 children: cat.children && cat.children.length > 0 ? buildNewCategories(parentId, cat.children, category) : []
//             })
//         }

//     }

//     return myCategories;
// }
const buildNewCategories = (parentId, categories, category) => {
    let myCategories = [];

    if(parentId == undefined){
        return [
            ...categories,
            {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                categoryImage : category.categoryImage,
                children: []
            }
        ];
    }
    
    for(let cat of categories){

        if(cat._id == parentId){
            myCategories.push({
                ...cat,
                children: cat.children ? buildNewCategories(parentId, [...cat.children, {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    categoryImage : category.categoryImage,
                    children: category.children
                }], category) : []
            });
        }else{
            myCategories.push({
                ...cat,
                children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
            });
        }

        
    }


    return myCategories;
}

export default (state = initState, action) => {
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
            const category = action.payload.category;
            const updatedCategories = buildNewCategories(category.parentId, state.categories, category);
         
            state = {
                ...state,
                categories: updatedCategories,
                loading: false
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...state,
                loading: false
            }
            break;
    }
    return state;
}