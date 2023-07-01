$(()=>{
    $('#root').prepend(`
        <!--${window.project.componant.getHeaderHtml()}-->
        ${window.project.componant.getMainContainer(window.project.resume.getHtml())}
        <!--${window.project.componant.getFooterHtml()}-->
    `);
});