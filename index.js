const { jobs } = require('./jobs.json');

let totalKm = 0;
let totalXp = 0;
let totalJobs = jobs.length;

for (let job of jobs) {
    totalKm += job.km;
    totalXp += job.xp;
}

let XPperKM = totalXp / totalKm;

let roundedXPperKM = Math.round(XPperKM * 100000) / 100000; 

if (roundedXPperKM < 2) {
    console.log(`Jobs completed: ${totalJobs}.\nTotal KM: ${totalKm}.\nTotal XP: ${totalXp}.\nXP per KM: ${roundedXPperKM}[BAD].`);
    return;
} else if (roundedXPperKM > 1.99999999999) {
    console.log(`Jobs completed: ${totalJobs}.\nTotal KM: ${totalKm}.\nTotal XP: ${totalXp}.\nXP per KM: ${roundedXPperKM}[GOOD].`);
    return;
}