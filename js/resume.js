window.project = {
    ...window.project,
    resume:{
        getHeading: ()=>{
            return `
                <style>
                    .resume.heading{
                        display: flex;
                        gap: 10px;
                        justify-content: space-between;
                    }
                    .resume.left-block{

                    }
                    .resume.left-block .desc{
                        max-width: 300px;
                    }
                    .resume.right-block{

                    }
                    .resume.link{
                        display: flex;
                        gap: 20px;
                        justify-content: flex-end;
                        margin: 10px 0;
                    }
                    .resume.link .text a{
                        text-decoration: none;
                        color: black;
                    }
                    .resume.link .image img{
                        width: 20px;
                    }
                    @media only screen and (max-width: 600px) {
                        .resume.heading{
                            flex-direction:column;
                        }
                        .resume.link{
                            justify-content: flex-start;
                        }
                        .resume.link .text{
                            min-width: 220px;
                        }
                    }
                </style>
                <div class='resume heading'>
                    <div class='resume left-block'>
                        <div class='resume name'>${'Rahul Sahu'}</div>
                        <div class='resume degree'>${'CSE Graduate'}</div>
                        <div class='resume desc'>${'"Experienced information technology professional in search of a position that allows me to apply my management and technical skills to achieve corporate goals, develop improved processes for managing IT requests and accomplish projects in a more efficient way."'}</div>
                    </div>
                    <div class='resume right-block'>
                        <div class='resume link email'>
                            <div class='resume text'>
                                <a target='_blank' href='mailto:${'rahulsahu9719@gmail.com'}'>${'rahulsahu9719@gmail.com'}</a>
                            </div>
                            <div class='resume image'><img src='${'./images/favicon.jpg'}'/></div>
                        </div>
                        <div class='resume link website'>
                            <div class='resume text'>
                                <a target='_blank' href='https://www.${'therealrahulsahu.github.io'}'>${'therealrahulsahu.github.io'}</a>
                            </div>
                            <div class='resume image'><img src='${'./images/favicon.jpg'}'></img></div>
                        </div>
                        <div class='resume link phone'>
                            <div class='resume text'>+91 ${'7354810352'}</div>
                            <div class='resume image'><img src='${'./images/favicon.jpg'}'></img></div>
                        </div>
                        <div class='resume link linkedin'>
                            <div class='resume text'>
                                <a target='_blank' href='https://www.${'linkedin.com/in/therealrahulsahu/'}'>${'linkedin.com/in/therealrahulsahu'}</a>
                            </div>
                            <div class='resume image'><img src='${'./images/favicon.jpg'}'></img></div>
                        </div>
                        <div class='resume link twitter'>
                            <div class='resume text'>
                                <a target='_blank' href='https://www.${'twitter.com/realrahulsahu'}'>${'twitter.com/realrahulsahu'}</a>
                            </div>
                            <div class='resume image'><img src='${'./images/favicon.jpg'}'></img></div>
                        </div>
                        <div class='resume link github'>
                            <div class='resume text'>
                                <a target='_blank' href='https://www.${'github.com/therealrahulsahu'}'>${'github.com/therealrahulsahu'}</a>
                            </div>
                            <div class='resume image'><img src='${'./images/favicon.jpg'}'></img></div>
                        </div>
                    </div>
                </div>
            `;
        },
        getHtml: ()=>{
            return `
                <style>
                    .resume.intro.sep{
                        border: 1px solid black;
                    }
                </style>
                <div class='resume main'>
                    ${window.project.resume.getHeading()}
                    <div class='resume intro sep'></div>
                </div>
            `;
        }
    }
}