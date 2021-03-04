console.log("HELLO?")

// When one project is opened, close the others and all their child summaries
document.querySelectorAll('summary.project-title').forEach(clickedSummary=>{
    clickedSummary.onclick = ()=>{
        document.querySelectorAll('summary.project-title').forEach(otherSummary=>{
            if(otherSummary.classList !== clickedSummary.classList && otherSummary.parentElement.open){                
                otherSummary.parentElement.querySelectorAll('details')
                    .forEach(detail=>{detail.open = false})
                otherSummary.parentElement.open = false
                
                clickedSummary.scrollIntoView(true)
            }
        })
    }
})