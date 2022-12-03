



export const articleSave = ( list ) => {
    console.log("Only Only", list);
};

export const saveArticleOnStorage = ( article ) => {
    localStorage.setItem( "articleBody" , JSON.stringify(article.blocks) );
};
