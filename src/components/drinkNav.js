import React from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

function TabbedPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabbedPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
// This changes the text under the bar
  },
}))


export default function FullWidthTabs() {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleChangeIndex = index => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="header"
          centered
        >
          <Tab label="Bottles" {...a11yProps(0)} />
          <Tab label="Draft" {...a11yProps(1)} />
          <Tab label="Mixed Drinks" {...a11yProps(2)} />
          <Tab label="Wine" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabbedPanel value={value} index={0}>
          Item One
        </TabbedPanel>
        <TabbedPanel value={value} index={1}>
          Item Two
        </TabbedPanel>
        <TabbedPanel value={value} index={2}>
          Item Three
        </TabbedPanel>
        <TabbedPanel value={value} index={3}>
          Item 4
        </TabbedPanel>
      </SwipeableViews>
    </div>
  )
}
