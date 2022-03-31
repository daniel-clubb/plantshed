import React from "react";
import bFlag from "../../images/Brazil.png";
import eFlag from "../../images/Ethiopia.png";

export default function Countries() {
    return (
        <table>
            <thead>
                <tr>
                    <td>BRAZIL</td>
                    <td>ETHIOPIA</td>
                </tr>
            </thead>
            <tbody>
               <tr>
                    <td>
                        <img src={bFlag} alt="Brazilian Flag"></img>    
                    </td>                 
                    <td>
                        <img src={eFlag} alt="Ethiopian Flag"></img>
                    </td>
                </tr> 
                <tr>
                    <td>Description Country1</td>
                    <td>Description Country2</td>
                </tr>
                <tr>
                    <td>
                        <button class="btn btn-primary btn-xs" ng-click="r.changeView('requests/edit/' + request.id)">
                            <i class="fa fa-pencil-square-o"></i>Button1
                        </button>
                        <button class="btn btn-primary btn-xs" ng-click="r.changeView('requests/edit/' + request.id)">
                            <i class="fa fa-step-backward"></i>
                            <i class="fa fa-step-forward"></i>Button2
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary btn-xs" ng-click="r.changeView('requests/edit/' + request.id)">
                            <i class="fa fa-pencil-square-o"></i>Button1
                        </button>
                        <button class="btn btn-primary btn-xs" ng-click="r.changeView('requests/edit/' + request.id)">
                        <i class="fa fa-step-backward"></i>
                        <i class="fa fa-step-forward"></i>Button2
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
