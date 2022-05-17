function getProjectDetail(){
    let params = new URLSearchParams(location.search);
    let id = params.get('id'); // get param id from url
    console.log(id)
    let a = localStorage.getItem('list_project'); // get data list project from local storage
    let isArrayEmpty = x => (x === null) ? [] : JSON.parse(x); // check if array is empty then return array, else parse the string
    let projects = isArrayEmpty(a);
    return projects.find(x => x.id == id); // find project by id
}

function checkTechLogoifExists(list){
    let logoTech = '';

    // Check if checkbox technology is checked, then return their logo
    if (list.includes('node-js')){
        logoTech += '<div class="logo"><i class="fa-brands fa-node-js"></i></div><span> Node Js</span>';
    }
    if (list.includes('react-js')){
        logoTech += '<div class="logo"><i class="fa-brands fa-react"></i></div><span> React js</span>';
    }
    if (list.includes('next-js')){
        logoTech += '<div class="logo"><img src="assets/image/Nextjs-logo.svg" alt=""></div><span> Next Js</span>';
    }
    if (list.includes('typeScript-js')){
        logoTech += '<div class="logo"><img src="assets/image/Typescript_logo_2020.svg" alt=""></div><span> TypeScript</span>';
    }
    return logoTech;
}

window.onload = () => {
    let data = getProjectDetail();
    let projectsDetailContainer = document.getElementById('project-detail');
    projectsDetailContainer.innerHTML += `<h1>${data.title}</h1>
        <div class="container">
            <img src="${data.image}" alt="" id="detail-image-project">
            <div class="item">
                <h3>Duration</h3>
                <div class="duration">
                    <p><i class="fa-solid fa-calendar-days"></i> ${data.startDate} - ${data.endDate}</p>
                    <p><i class="fa-solid fa-clock-rotate-left"></i> ${data.lengthDate} Months</p>
                </div>
                <h3>Technologies</h3>
                <div class="tech-icon" id="tech-icon-project-detail">
                    <div class="">
                        <div class="item-icon">
                            ${checkTechLogoifExists(data.logoTechlist)}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="project-description" style="text-align: justify">
            <p>${data.description}</p>
        </div>`
};