import { Constant } from './../../Helper/constant';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  aboutCompany: string = Constant.ABOUT_COMPANY;
  aboutCompanyDetails: string = Constant.ABOUT_COMPANY_DETAILS;
  aboutValues: string = Constant.OUR_VALUES;
  ourValuesBold: string = Constant.OUR_COMPANY_VALUE_BOLD;
  commitmentToHonesty: string = Constant.COMMITMENT_TO_HONESTY;
  scienceAndEngineering: string = Constant.SCIENCE_AND_ENGINEERING;
  ourValueDetails: string = Constant.OUR_VALUES_DETAILS;
  scienceAndEngineeringDetails: string = Constant.SCIENCE_AND_ENGINEERING_DETAILS;


  ourSolution = Constant.OUR_SOLUTION;
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
