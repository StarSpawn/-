const txtData = [
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;东航MU5735航班于3月21日13时16分从昆明起飞，14时17分保持巡航高度8900米进入广州管制区。14时20分，管制员发现飞机高度急剧下降，随即多次呼叫机组，但未收到任何回复，14时23分飞机雷达信号消失。后经核实，飞机在梧州市藤县境内坠毁。',
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;事故发生后，消防、民兵、武警等多支救援力量迅速响应，紧急集结，第一时间进入事故现场展开搜救工作。当地村民及社会组织也积极参与，帮助维持后勤保障。截至2022年3月30日16时，累计组织出动救援人员3.4万余人次，核心区搜救面积超过40万平方米，开挖土方2.27万立方米，搜寻到飞机残骸碎片49117件。',
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从3月21日客机坠毁到4月20日民航局发布东航MU5735事故调查初步报告，整场事件在这段时间内经历了一些关键的时间节点，我们以时间轴的方式将其一一呈现',
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;民航局于4月20日《“3.21”东航MU5735航空器飞行事故调查初步报告》，报告主要包括飞行经过、机组机务人员、适航维修、残骸分布等事实信息。尽管还是有许多声音在不断要求着最终的答复，但航空事故调查是一个漫长的流程，我们仍需要时间来等待真相。我们也将在下个部分对空难调查进行介绍，带您了解为何航空事故调查往往需要一个较长的时间周期。'
];

const titleData= [
    '坠机发生',
    '救援力量集结',
    '调查时间线',
    '初步报告'
];

function showTxt(e) {
    console.log("onclick", e)
    document.getElementById("title").innerHTML = titleData[e];// modify the title
    document.getElementById("text").innerHTML = txtData[e];// modify the content 
    document.getElementById("text").style.textAlign = "left";
    document.getElementById("text").style.letterSpacing = "1px";
    document.getElementById("text").style.lineHeight = "40px" ;
    document.getElementById("text").style.fontFamily = "STSong" ;
    document.getElementById("text").style.fontWeight = "bold" ;
}