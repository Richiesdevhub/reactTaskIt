import React from 'react';
import '../stylesheets/report.css'

function Report({reportText}){
return(
    <div className='task-report'>
        {reportText}
    </div>
)

}

export default Report;