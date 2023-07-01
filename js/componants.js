window.project = {
    ...window.project,
    componant:{
        getFooterHtml: ()=>{
            return `
                <div>Footer</div>
            `;
        },
        getHeaderHtml: ()=>{
            return `
                <div>Header</div>
            `;
        },
        getMainContainer: (innerHtml)=>{
            return `
                <style>
                    .main-container.upper-block{

                    }
                    .main-container.inner-block{
                        max-width: 1000px;
                        margin: 0 auto;
                        padding: 10px;
                    }
                </style>
                <div class='main-container upper-block'>
                    <div class='main-container inner-block'>
                        ${innerHtml}
                    </div>
                </div>
            `;
        }
    }
}