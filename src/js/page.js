const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const job = JSON.parse(localStorage.getItem('currentJob'))
console.log(job);
window.onload = function () {
    const htmls = `<div class="info-box">
    <h1 class="box-job-name">${job.jobName}</h1>
    <p class="box-supervisor">Người phụ trách: ${job.supervisor}</p>
    <table style="width: 100%;">
        <tr>
            <td>
                <p class="box-receive-locate">Nơi nhận hàng: ${job.receiveLocation}</p>
            </td>
            <td>
                <p class="box-release-locate">Nơi giao hàng hàng: ${job.releaseLocation}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p class="box-date-start">Ngày bắt đầu: ${job.dateStart}</p>
            </td>
            <td>
                <p class="box-date-end">Ngày kết thúc: ${job.dateEnd}</p>
            </td>
        </tr>
    </table>
    <label style="font-size: 20px;">Chi tiết</label>
    <div class="box-detail">${job.detail}</div>
</div>
    `
    $('.wrapper').innerHTML = htmls

}


           