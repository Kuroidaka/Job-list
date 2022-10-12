
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var jobStorage = []
const addBtn = $('.add')
let currentJob

window.App = {
    getJob: JSON.parse(localStorage.getItem('jobs')),
    updateJob: function(jobs) {
        localStorage.setItem('jobs', JSON.stringify(jobs));
    },
    setCurrentJob: (job)=> localStorage.setItem('currentJob', JSON.stringify(job)),
    handleEvent: function(){
        const _this = this
        
        // Click 'thêm
        addBtn.onclick = (e) => {
            e.preventDefault()
            const jobName = $('#job-name')
            const supervisor = $('#supervisor')
            const receiveLocation = $('#receive-location')
            const releaseLocation = $('#release-location')
            const dateStart = $('#date-start')
            const dateEnd = $('#date-end')
            const detail = $('#detail')
            
            const newJob = {
                jobName: jobName.value,
                supervisor: supervisor.value,
                receiveLocation: receiveLocation.value,
                releaseLocation: releaseLocation.value,
                dateStart: dateStart.value,
                dateEnd: dateEnd.value,
                detail: detail.value,
            }
            jobStorage.push(newJob)
            _this.updateJob(jobStorage)
            console.log('update jobs');
            _this.render()
        }

    },
    directPage: async function(event) {
        event.preventDefault()
        
    },    
    render: function() {
        if(jobStorage){
        const htmls = jobStorage.map((job, idx) => {

            return `
                    <div class="job-item">
                        <div class="job-item-name" onclick="window.App.renderPage(${idx})" >${job?.jobName}</div>
                        <div class="job-item-supervisor-name">${job?.supervisor}</div>
                        <div class="job-item-receive-locate">Nơi nhận: ${job?.receiveLocation}</div>
                        <div class="job-item-date-start">Ngày bắt đầu: ${job?.dateStart}</div>
                    </div>
                `
        })
        $('.job-list').innerHTML = htmls.join('')
    }
    },
    renderPage: async function(id) {

        this.setCurrentJob(jobStorage[id])
        window.location.href = '/public/page.html'  
    },
    loadJobs: function() {
        // check valid localStorage (cause it will return null when local not contain any data and it will error to use map function for jobStorage)
        if(this.getJob){
            jobStorage= this.getJob
        }
        console.log('get job');
        console.log(jobStorage);
    },

    start: async function(){
        this.loadJobs()
        this.render()
        this.handleEvent()
    }
}

console.log(window.location.href);
if(window.location.href=='http://127.0.0.1:5500/public/'){
    App.start()
}


