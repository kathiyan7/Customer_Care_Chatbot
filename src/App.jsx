import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import './App.css'

function App() {
  const steps = [
    {
      id:'intial',
      message:'Hi, How can I help you?',
      trigger:'promt_1'
    },
    {
      id:'promt_1',
      message:'Please select your query',
      trigger:'options_1'
    },
    {
      id:'options_1',
      options:[
        {value:"Complaints",label:"Complaints",trigger:"complaints"},
        {value:"Feedback",label:"Feedback",trigger:"Feedback"},
        {value:"Poll",label:"Poll",trigger:"Poll"},
        {value:"idea submission",label:"Idea Submission",trigger:"idea submission"},
      ]
    },
    {
      id:'complaints',
      message:'Please select the sector which you have complaint.',
      trigger:'option_2'
    },
    {
      id:'msg_1',
      message:'Please enter your query',
      trigger:'msg_1_1'
    },
    {
      id:'msg_1_1',
      user:true,
      trigger:'support'
    },
    {
      id:'support',
      message:'Our technical will contact you with few seconds',
      trigger:'end'
    },
    {
      id:'option_2',
      options:[
        {value:"Technical_error",label:"Technical error",trigger:"option_technical"},
        {value:"Service_issue",label:"Service Issue",trigger:"option_service"},
        {value:"Department_issue",label:"Department Issue",trigger:"option_department"},
      ]
    },
    {
      id:'option_technical',
      options:[
        {value:"Website_Downtime",label:"Website Downtime",trigger:"option_wd"},
        {value:"Slow_Load_Times",label:"Slow Load Times",trigger:"option_slt"},
        {value:"Form_Submission_Errors",label:"Form Submission Errors",trigger:"option_fse"},
        {value:"Data_Accuracy_and_Updates",label:"Data Accuracy and Updates",trigger:"option_dau"},
      ]
    },
    {
      id:'option_service',
      options:[
        {value:"how_to_fill_the_form",label:"How to Fill the Form",trigger:"steps_hff"},
        {value:"Edit_the_form",label:"Edit the Form",trigger:"steps_ef"},
        {value:"delete_the_form",label:"Delete the Form",trigger:"steps_df"},
      ]
    },
    {
      id:'option_department',
      options:[
        {value:"Public_Service",label:"Public Service",trigger:"option_ps"},
        {value:"Infrastructure",label:"Infrastructure",trigger:"option_i"},
        {value:"Administrative_Services",label:"Administrative Services",trigger:"option_as"},
        {value:"Law_Enforcement_and_Public_Safety",label:"Law Enforcement and Public Safety",trigger:"option_leps"},
        {value:"Environmental_Issues",label:"Environmental Issues",trigger:"option_ei"},
        {value:"Health_Services",label:"Health Services",trigger:"option_hs"},
        {value:"Education",label:"Education",trigger:"option_e"},
        {value:"Social_Services",label:"Social Services",trigger:"option_ss"},
        {value:"Corruption_and_Misconduct",label:"Corruption and Misconduct",trigger:"option_cm"},
        {value:"Taxes_and_Financial_Services",label:"Taxes and Financial Services",trigger:"option_tfs"},
        {value:"Legal_and_Regulatory_Issues",label:"Legal and Regulatory Issues",trigger:"option_lri"},
        {value:"Employment_and_Labor",label:"Employment and Labor",trigger:"option_el"},
        {value:"Consumer_Protection",label:"Consumer Protection",trigger:"option_cp"},
        {value:"Housing_and_Urban_Development",label:"Housing and Urban Development",trigger:"option_hud"},
        {value:"Civil_Rights",label:"Civil Rights",trigger:"option_cr"},
        {value:"Any_Other",label:"Any Other",trigger:"msg_1"},
      ]
    },
    {
      id:'option_wd',
      message:'Due to some internal work and heavy traffic the website is down, Our technical will contact you with few seconds',
      trigger:'end'
    },
    {
      id:'option_slt',
      message:'Due to heavy load and large date the website is running slow, Our technical will contact you with few seconds',
      trigger:'end'
    },
    {
      id:'option_fse',
      message:'Our Support will contact you with few seconds',
      trigger:'end'
    },
    {
      id:'option_dau',
      message:'Our Support will contact you with few seconds',
      trigger:'end'
    },
    {
      id:'steps_hff',
      message:'step 1: Go to Dashboard',
      trigger:'steps_hff_1'
    },
    {
      id:'steps_hff_1',
      message:'step 2: Click the options icon ☰',
      trigger:'steps_hff_2'
    },
    {
      id:'steps_hff_2',
      message:'step 3: Select the option Complaints',
      trigger:'steps_hff_3'
    },
    {
      id:'steps_hff_3',
      message:'step 4: Fill the correct details in the form',
      trigger:'steps_hff_4'
    },
    {
      id:'steps_hff_4',
      message:'step 5: If you have any proof of that complaint upload the document in the form (optional)',
      trigger:'steps_hff_5'
    },
    {
      id:'steps_hff_5',
      message:'step 6: After fill all the details submit the form',
      trigger:'steps_hff_6'
    },
    {
      id:'steps_hff_6',
      message:'step 7: You have successfully raised the complaint',
      trigger:'end'
    },
    {
      id:'steps_ef',
      message:'step 1: Go to Dashboard',
      trigger:'steps_ef_1'
    },
    {
      id:'steps_ef_1',
      message:'step 2: Click the options icon ☰',
      trigger:'steps_ef_2'
    },
    {
      id:'steps_ef_2',
      message:'step 3: Select the option Your Complaints',
      trigger:'steps_ef_3'
    },
    {
      id:'steps_ef_3',
      message:'step 4: Select the form which you have to edit',
      trigger:'steps_ef_4'
    },
    {
      id:'steps_ef_4',
      message:'step 5: Edit the details',
      trigger:'steps_ef_5'
    },
    {
      id:'steps_ef_5',
      message:'step 6:  After editing the details submit the form',
      trigger:'end'
    },
    {
      id:'steps_df',
      message:'step 1: Go to Dashboard',
      trigger:'steps_df_1'
    },
    {
      id:'steps_df_1',
      message:'step 2: Click the options icon ☰',
      trigger:'steps_df_2'
    },
    {
      id:'steps_df_2',
      message:'step 3: Select the option Your Complaints',
      trigger:'steps_df_3'
    },
    {
      id:'steps_df_3',
      message:'step 4: Select the form which you have to delete',
      trigger:'steps_df_4'
    },
    {
      id:'steps_df_4',
      message:'step 5: select the option delete',
      trigger:'steps_df_5'
    },
    {
      id:'steps_df_5',
      message:'step 6: Your Form has been deleted successfully',
      trigger:'end'
    },
    {
      id:'option_ps',
      message:'select which type of Public Services problem you have',
      trigger:'option_ps_1'
    },
    { 
      id:'option_ps_1',
      options:[
        {value:"public_transportation",label:"public transportation",trigger:"all"},
        {value:"postal_services",label:"postal services",trigger:"all"},
        {value:"utilities",label:"utilities",trigger:"all"},
        {value:"Others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_i',
      message:'select which type of Infrastructure problem you have',
      trigger:'option_i_1'
    },
    {
      id:'option_i_1',
      options:[
        {value:"Roads",label:"Roads",trigger:"all"},
        {value:"bridges",label:"Bridges",trigger:"all"},
        {value:"public_buildings",label:"public buildings",trigger:"all"},
        {value:"parks",label:"Parks",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_as',
      message:'select which type of Administrative Services problem you have',
      trigger:'option_as_1'
    },
    {
      id:'option_as_1',
      options:[
        {value:"Passports",label:"Passports",trigger:"all"},
        {value:"Birth_certificates",label:"Birth Certificates",trigger:"all"},
        {value:"Driver's_licenses",label:"Driver's Licenses",trigger:"all"},
        {value:"others",label:"others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_leps',
      message:'select which type of Law Enforcement and Public Safety problem you have',
      trigger:'option_leps_1'
    },
    {
      id:'option_leps_1',
      options:[
        {value:"police_conduct",label:"Police_Conduct",trigger:"all"},
        {value:"crime_rates",label:"Crime Rates",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_ei',
      message:'select which type of Environmental Issues problem you have',
      trigger:'option_ei_1'
    },
    {
      id:'option_ei_1',
      options:[
        {value:"pollution",label:"Pollution",trigger:"all"},
        {value:"waste_management",label:"Waste Management",trigger:"all"},
        {value:"deforestation",label:"Deforestation",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_hs',
      message:'select which type of Health Services problem you have',
      trigger:'option_hs_1'
    },
    {
      id:'option_hs_1',
      options:[
        {value:"public_hospitals",label:"Public Hospitals",trigger:"all"},
        {value:"clinics",label:"Clinics",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_e',
      message:'select which type of Education problem you have',
      trigger:'option_e_1'
    },
    {
      id:'option_e_1',
      options:[
        {value:"public_schools",label:"Public Schools",trigger:"all"},
        {value:"universities",label:"Universities",trigger:"all"},
        {value:"educational_programs",label:"Educational Programs",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_ss',
      message:'select which type of Social Services problem you have',
      trigger:'option_ss_1'
    },
    {
      id:'option_ss_1',
      options:[
        {value:"welfare_programs",label:"Welfare Programs",trigger:"all"},
        {value:"unemployment_benefits",label:"Unemployment Benefits",trigger:"all"},
        {value:"housing_assistance",label:"Housing Assistance",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_cm',
      message:'select which type of Corruption and Misconduct problem you have',
      trigger:'option_cm_1'
    },
    {
      id:'option_cm_1',
      options:[
        {value:"corruption",label:"Corruption",trigger:"all"},
        {value:"fraud",label:"Fraud",trigger:"all"},
        {value:"unethical_behavior_by_government_officials",label:"Unethical Behavior by Government Officials",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_tfs',
      message:'select which type of Taxes and Financial Services problem you have',
      trigger:'option_tfs_1'
    },
    {
      id:'option_tfs_1',
      options:[
        {value:"tax_filings",label:"Tax Filings",trigger:"all"},
        {value:"refunds",label:"Refunds",trigger:"all"},
        {value:"assessments",label:"Assessments",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_lri',
      message:'select which type of Legal and Regulatory Issues problem you have',
      trigger:'option_lri_1'
    },
    {
      id:'option_lri_1',
      options:[
        {value:"unfair_regulations",label:"Unfair Regulations",trigger:"all"},
        {value:"legal_disputes",label:"Legal Disputes",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_el',
      message:'select which type of Employment and Labor problem you have',
      trigger:'option_el_1'
    },
    {
      id:'option_el_1',
      options:[
        {value:"public_sector_employment",label:"Public Sector Employment",trigger:"all"},
        {value:"labor_laws",label:"Labor Laws",trigger:"all"},
        {value:"workplace_rights",label:"Workplace Rights",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_cp',
      message:'select which type of Consumer Protection problem you have',
      trigger:'option_cp_1'
    },
    {
      id:'option_cp_1',
      options:[
        {value:"businesses",label:"Businesses",trigger:"all"},
        {value:"products",label:"Products",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_hud',
      message:'select which type of Housing and Urban Development problem you have',
      trigger:'option_hud_1'
    },
    {
      id:'option_hud_1',
      options:[
        {value:"public_housing",label:"Public Housing",trigger:"all"},
        {value:"urban_planning",label:"Urban Planning",trigger:"all"},
        {value:"zoning_laws",label:"Zoning Laws",trigger:"all"},
        {value:"real_estate_regulations",label:"Real Estate Regulations",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'option_cr',
      message:'select which type of Civil Rights problem you have',
      trigger:'option_cr_1'
    },
    {
      id:'option_cr_1',
      options:[
        {value:"discrimination",label:"Discrimination",trigger:"all"},
        {value:"violation_of_rights",label:"Violation of Rights",trigger:"all"},
        {value:"others",label:"Others",trigger:"msg_1"},
      ]
    },
    {
      id:'all',
      message:'Go to Complaints section and fill the form',
      trigger:'ss'
    },
    {
      id:'ss',
      message:'If you don\'t know how to fill the form select go back to the main menu and select service issues and check it',
      trigger:'Main_menu' 
    },
    {
      id:'Main_menu',
      options:[
        {value:"Main_menu",label:"Main Menu",trigger:"option_2"},
        {value:"continue",label:"Continue",trigger:"Continue"},
      ]
    },
    {
      id:'Continue',
      message:'Still, If your complaint is not solved',
      trigger:'support'
    },
    {
      id:'Feedback',
      message:'Please enter your feedback regarding this G.O',
      trigger:'msg_2'
    },
    {
      id:'msg_2',
      user:true,
      trigger:'end'
    },
    {
      id:'Poll',
      message:'Are you okay with this G.O',
      trigger:'options_3'
    },
    {
      id:'options_3',
      options:[
        {value:"Okay", label:"Okay",trigger:"end"},
        {value:"Not_Okay", label:"Not Okay",trigger:"end"},
      ]
    },
    {
      id:'idea submission',
      message:'Here you can give any suggestions or new ideas for the problem,If you have please enter below.',
      trigger:'msg_3'
    },
    {
      id:'msg_3',
      user:true,
      trigger:'end'
    },
    {
      id:'end',
      message:'Thank You',
      end:true
    },
  ]

  return (
    <>
    <div className="gg">
      <ChatBot steps={steps} style={{height:'100%', width:'1280px'}}/>
    </div>
    </>
  );
}

export default App