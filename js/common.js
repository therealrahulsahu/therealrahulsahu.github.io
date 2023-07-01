window.project = {
    ...project,
    commonFn: {
        addScript: (path, callback)=>{
            const tag = window.document.createElement('script');
            tag.src = path;
            tag.async = true;
            tag.type = 'text/javascript';
            tag.addEventListener('load', callback);
            window.document.head.append(tag);
        },
        scriptAlreadyExists: (path)=>{
            return $(`script[src='${path}']`).length!==0;
        }
    }
};