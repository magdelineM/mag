const covid19ImpactEstimator = (data) => {
  region: {
name: "Africa",
avgAge: 19.7,
avgDailyIncomeInUSD: 5,
avgDailyIncomePopulation: 0.71
},
periodType: "days",
timeToElapse: 58,
reportedCases: 674,
population: 66622705,
totalHospitalBeds: 1380614
};
return 
  impact:{currentlyInfected:reportedCases*10},
  severeImpact:{currentlyinfected:reportedCases*50},
  impact:{infectionsByRequestedTime:currentlyInfected*(512)},
  severeImpact:{infectionsByRequestedTime:currentlyInfected*(512)}
  
},

export default covid19ImpactEstimator;
return impact:{6740},
       severeImpact:{33700},
       impact:{3450880},
       severeImpact:{17254400},
       severeCasesByRequestedTime:{517632},
       severeCasesByRequestedTime:{2588160},
       hospitalBedsRequestedTime:{13},
       hospitalBedsRequestedTime:{66},
}
