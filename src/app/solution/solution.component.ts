import {Component, OnInit} from '@angular/core';
import {Constant} from '../../Helper/constant';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  ourSolution: string = Constant.OUR_SOLUTION;
  roadsAndHighway: string = Constant.ROADS_AND_HIGHWAYS;
  roadsAndHighwayDetails = Constant.ROADS_AND_HIGHWAYS_DETAILS;
  railways: string = Constant.RAILWAYS;
  railwaysDetails: string = Constant.RAILWAYS_DETAILS;
  city: string = Constant.CITY;
  cityDetails: string = Constant.CITY_DETAILS;
  powerLine: string = Constant.POWER_LINE;
  powerLineDetails: string = Constant.POWER_LINE_DETAILS;
  pipeLine: string = Constant.PIPELINES;
  pipeLineDetails: string = Constant.PIPELINES_DETAILS;
  droneCanShowForward: string = Constant.DRONES_CAN_SHOW_THE_WAY_FORWARD;
  droneCanShowForwardDetails: string = Constant.DRONES_CAN_SHOW_THE_WAY_FORWARD_DETAILS;
  newCityOldProblem: string = Constant.NEW_CITIES_SAME_OLD_PROBLEMS;
  newCityOldProblemDetails: string = Constant.NEW_CITIES_SAME_OLD_PROBLEMS_DETAILS;
  oFDropCallsAndPowerCuts: string = Constant.OF_DROPPED_CALLS_AND_POWER_CUTS;
  oFDropCallsAndPowerCutsDetails: string = Constant.OF_DROPPED_CALLS_AND_POWER_CUTS_DETAILS;
  solar: string = Constant.SOLAR;
  solarDetails: string = Constant.SOLAR_DETAILS;
  digitalFlow: string = Constant.DIGITIZING_THE_FLOW;
  digitalFlowDetails: string = Constant.DIGITIZING_THE_FLOW_DETAILS;
  mining: string = Constant.MINING;
  miningDetails: string = Constant.MINING_DETAILS;
  miningIsEasySolution: string = Constant.MINING_IS_AN_EASIER_BALANCE_TO_FIND;
  miningIsEasySolutionDetails: string = Constant.MINING_IS_AN_EASIER_BALANCE_TO_FIND_DETAILS;
  whenProductivity: string = Constant.WHEN_PRODUCTIVITY_NEEDS_SCALABILITY;
  whenProductivityDetails: string = Constant.WHEN_PRODUCTIVITY_NEEDS_SCALABILITY_DETAILS;
  agriculture: string = Constant.AGRICULTURE;
  agricultureDetails: string = Constant.AGRICULTURE_DETAILS;
  analyse: string = Constant.ANALYSE;
  develop: string = Constant.DEVELOP;
  deliver: string = Constant.DELIVER;
  whatWeOffer: string = Constant.WHAT_WE_OFFER;

  constructor() {
  }

  ngOnInit() {
  }

}
