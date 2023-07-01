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
        block: {
            getEducation: ()=>{
                const subBlock = (items)=>{
                    return `
                        <div class='resume sub-education'>
                            
                        </div>
                    `;
                };
                const data = [
                    {
                        title: 'Bachelor of Technology',
                        name: 'Kalinga Institute of Industrial Technology',
                        nameLink: 'https://1drv.ms/b/s!Am373MZ-hj_4uH-0cJZhSyNV9JHJ?e=dz5by6',
                        date: '07/2017 - 05/2021',
                        grade: '9.06 CGPA',
                        coursesText: 'Courses',
                        courses: [{
                            text: 'Computer Science and Engineering'
                        }]
                    },
                    {
                        title: 'School',
                        name: 'International Public School',
                        nameLink: '07/2013 - 04/2016,',
                        coursesText: 'Courses',
                        courses: [{
                            text: 'CBSE Board'
                        },{
                            text: 'SSC - 82 %',
                            link: 'https://1drv.ms/u/s!Am373MZ-hj_4s3VADwgjC13dVnaI?e=rDJCtr'
                        },{
                            text: 'HSC - 8.4 CGPA',
                            link: 'https://1drv.ms/u/s!Am373MZ-hj_4s3ZVtU9sNB1uPMAg?e=QXH27v'
                        }]
                    }
                ];
                return `
                    <div class='resume info-sub education'>
                        ${data.map(block=>subBlock(block)).join('\n')}
                    </div>
                `;
            },
            getWorkExperience: ()=>{
                return `
                    <div class='resume info-sub'></div>
                `;
            },
            getSkills: ()=>{
                return `
                    <div class='resume info-sub'></div>
                `;
            },
            getProjects: ()=>{
                return `
                    <div class='resume info-sub'></div>
                `;
            },
            getCertificate: ()=>{
                return `
                    <div class='resume info-sub'></div>
                `;
            },
            getLangs: ()=>{
                return `
                    <div class='resume info-sub'></div>
                `;
            },
            getInterest: ()=>{
                return `
                    <div class='resume info-sub'></div>
                `;
            }
        },
        getHtml: ()=>{
            return `
                <style>
                    .resume.intro.sep{
                        border: 1px solid black;
                    }
                    .resume.info-block{
                        display: flex;
                    }
                </style>
                <div class='resume main'>
                    ${window.project.resume.getHeading()}
                    <div class='resume intro sep'></div>
                    <div class='resume info-block'>
                        ${window.project.resume.block.getEducation()}
                        ${window.project.resume.block.getWorkExperience()}
                        ${window.project.resume.block.getSkills()}
                        ${window.project.resume.block.getProjects()}
                        ${window.project.resume.block.getCertificate()}
                        ${window.project.resume.block.getLangs()}
                        ${window.project.resume.block.getInterest()}
                    </div>
                </div>
            `;
        }
    }
}