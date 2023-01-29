import {
    adddashboarddata,
    getdashboarddata,
    getdatadashboardID,
    deletedashboarddataID,
    updatedashboarddataID
    } from '../controller/restCon.js';

    const allRoutes = (app) => 
app.route('/dashboarddata')

.get(
    getdashboarddata
)

.post(
    adddashboarddata
);

app.route('/dashboarddata/:dashboarddataID')

.get(
    getdatadashboardID
)

.delete(
    deletedashboarddataID
)

.put(
    updatedashboarddataID
);