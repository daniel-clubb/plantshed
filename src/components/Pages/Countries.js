import React from "react";
import bFlag from "../../images/Liberia.png";
import eFlag from "../../images/Ethiopia.png";
import './Countries.css'

export default function Countries() {
    return (
        <div className="countryTable">
        <table align="center">
            <thead>
                <tr>
                    <td align="center">LIBERIA</td>
                    <td align="center">ETHIOPIA</td>
                </tr>
            </thead>
            <tbody>
               <tr>
                    <td>
                        <img src={bFlag} alt="Liberian Flag"></img>    
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
                            <i class="fa fa-pencil-square-o"></i>Brazilian Coffee
                        </button>
                        <button class="btn btn-primary btn-xs" ng-click="r.changeView('requests/edit/' + request.id)">
                            <i class="fa fa-step-backward"></i>
                            <i class="fa fa-step-forward"></i>Brazilian Plant
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary btn-xs" ng-click="r.changeView('requests/edit/' + request.id)">
                            <i class="fa fa-pencil-square-o"></i>Ethiopian Coffee
                        </button>
                        <button class="btn btn-primary btn-xs" ng-click="r.changeView('requests/edit/' + request.id)">
                        <i class="fa fa-step-backward"></i>
                        <i class="fa fa-step-forward"></i>Ethiopian Coffee
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}
