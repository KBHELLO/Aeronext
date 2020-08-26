import {Component, OnInit} from '@angular/core';
import {Constant} from '../../Helper/constant';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  training: string = Constant.TRAINING;
  automationTraining: string = Constant.AUTOMATION_TRAINING;
  projectObjective: string = Constant.PROJECT_OBJECTIVE;
  projectObjectiveDetails: string = Constant.PROJECT_OBJECTIVE_DETAILS;
  whatYouWillReceive: string = Constant.WHAT_YOU_RECEIVE;
  whatYouWillBuild: string = Constant.WHAT_YOU_BUILD;
  point1: string = Constant.POINT_1;
  point2: string = Constant.POINT_2;
  point3: string = Constant.POINT_3;
  point4: string = Constant.POINT_4;
  point5: string = Constant.POINT_5;
  automationBuildPoint1: string = Constant.AUTOMATION_BUILD_POINT_1;
  automationBuildPoint2: string = Constant.AUTOMATION_BUILD_POINT_2;
  automationBuildPoint3: string = Constant.AUTOMATION_BUILD_POINT_3;
  automationBuildPoint4: string = Constant.AUTOMATION_BUILD_POINT_4;
  whatYouWillLearn: string = Constant.WHAT_YOU_WILL_LEARN;
  automationLearnP1: string = Constant.AUTOMATION_LEARN_P_1;
  automationLearnP2: string = Constant.AUTOMATION_LEARN_P_2;
  automationLearnP3: string = Constant.AUTOMATION_LEARN_P_3;
  automationLearnP4: string = Constant.AUTOMATION_LEARN_P_4;
  automationLearnPM1: string = Constant.AUTOMATION_LEARN_M_P_1;
  automationLearnPM2: string = Constant.AUTOMATION_LEARN_M_P_2;
  automationLearnPM3: string = Constant.AUTOMATION_LEARN_M_P_3;
  automationLearnPM4: string = Constant.AUTOMATION_LEARN_M_P_4;
  automationLearnPM5: string = Constant.AUTOMATION_LEARN_M_P_5;
  automationLearnPM6: string = Constant.AUTOMATION_LEARN_M_P_6;
  uavTraining: string = Constant.UAV_TRAINING;
  uavProjectObjectiveDetails: string = Constant.UAV_PROJECT_OBJECTIVE_DETAILS;
  workbench: string = Constant.WORKBENCH;
  buildToFly: string = Constant.BUILD_TO_FLY;
  enquiryAndDesign: string = Constant.ENQUIRY_AND_DESIGN;
  workingAnimatronicHandProject: string = Constant.WORKING_ANIMATRONIC_HAND_PROJECT;
  uavBuildPoint1: string = Constant.UAV_BUILD_POINT_1;
  uavBuildPoint2: string = Constant.UAV_BUILD_POINT_2;
  uavBuildPoint3: string = Constant.UAV_BUILD_POINT_3;

  constructor() {
  }

  ngOnInit() {
  }

}
