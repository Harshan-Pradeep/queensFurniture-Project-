import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";

import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

function Dashboard() {
  const chartSetting = {
    yAxis: [
      {
        label: "Monthly Items Sales",
      },
    ],
    width: 700,
    height: 500,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "rotate(-90deg) translate(0px, -12px)",
      },
    },
  };
  const dataset = [
    {
      beds: 59,
      desks: 57,
      chairs: 86,
      sofas: 21,
      month: "Jan",
    },
    {
      beds: 50,
      desks: 52,
      chairs: 78,
      sofas: 28,
      month: "Fev",
    },
    {
      beds: 47,
      desks: 53,
      chairs: 106,
      sofas: 41,
      month: "Mar",
    },
    {
      beds: 54,
      desks: 56,
      chairs: 92,
      sofas: 73,
      month: "Apr",
    },
    {
      beds: 57,
      desks: 69,
      chairs: 92,
      sofas: 99,
      month: "May",
    },
    {
      beds: 60,
      desks: 63,
      chairs: 103,
      sofas: 144,
      month: "June",
    },
    {
      beds: 59,
      desks: 60,
      chairs: 105,
      sofas: 319,
      month: "July",
    },
    {
      beds: 65,
      desks: 60,
      chairs: 106,
      sofas: 249,
      month: "Aug",
    },
    {
      beds: 51,
      desks: 51,
      chairs: 95,
      sofas: 131,
      month: "Sept",
    },
    {
      beds: 60,
      desks: 65,
      chairs: 97,
      sofas: 55,
      month: "Oct",
    },
    {
      beds: 67,
      desks: 64,
      chairs: 76,
      sofas: 48,
      month: "Nov",
    },
    {
      beds: 61,
      desks: 70,
      chairs: 103,
      sofas: 25,
      month: "Dec",
    },
  ];

  const valueFormatter = (value) => `${value} itmes`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        rowGap: "50px",
      }}
    >
     <h1>Overview</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          columnGap: "200px",
        }}
      >
       
        <Card variant="solid" color="primary" invertedColors>
          <CardContent orientation="horizontal">
            <CircularProgress size="lg" determinate value={20}>
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </SvgIcon>
            </CircularProgress>
            <CardContent>
              <Typography level="body-md">Monthly Gross profit</Typography>
              <Typography level="h2"> LKR 5.2M</Typography>
            </CardContent>
          </CardContent>
        </Card>

        <Card variant="solid" color="primary" invertedColors>
          <CardContent orientation="horizontal">
            <CircularProgress size="lg" determinate value={20}>
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </SvgIcon>
            </CircularProgress>
            <CardContent>
              <Typography level="body-md">Users</Typography>
              <Typography level="h2">Over 250+</Typography>
            </CardContent>
          </CardContent>
        </Card>

        <Card variant="solid" color="primary" invertedColors>
          <CardContent orientation="horizontal">
            <CircularProgress size="lg" determinate value={20}>
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </SvgIcon>
            </CircularProgress>
            <CardContent>
              <Typography level="body-md">Products</Typography>
              <Typography level="h2">Over 100+</Typography>
            </CardContent>
          </CardContent>
        </Card>
      </div>

      <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:"center",
          columnGap: "200px",
        }}>
        <h1 style={{marginBottom:'50px'}}>This Month Sales</h1>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Beds" },
                { id: 1, value: 15, label: "Desks" },
                { id: 2, value: 30, label: "Chairs" },
                { id: 2, value: 20, label: "Sofas" },
              ],
            },
          ]}
          width={700}
          height={500}
        />
      </div>
      <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:"center",
          columnGap: "200px",
        }}>
        <h1 style={{marginBottom:'50px'}}>This Month Sales</h1>
      <BarChart
          dataset={dataset}
          xAxis={[{ scaleType: "band", dataKey: "month" }]}
          series={[
            { dataKey: "beds", label: "Beds", valueFormatter },
            { dataKey: "desks", label: "Desks", valueFormatter },
            { dataKey: "chairs", label: "Chairs", valueFormatter },
            { dataKey: "sofas", label: "Sofas", valueFormatter },
          ]}
          {...chartSetting}
        />
      </div>
    </div>
  );
}

export default Dashboard;
