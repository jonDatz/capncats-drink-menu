import React from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

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
  },
  highlights: {
    backgroundColor: "#2f2f2f",
    inkBarStyle: "#e8bd51",
  },
  drinklist: {
    fontFamily: "Chelsea Market",
  },
  // This changes the text under the bar
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
      <AppBar className={classes.highlights} position="static">
        <Tabs
          TabIndicatorProps={{
            style: { background: "#e8bd51" }, //this changed the tabindicator color.
          }}
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
          <h2 className={classes.drinklist}>Miller Lite</h2>
          <h2 className={classes.drinklist}>Coors Light</h2>
          <h2 className={classes.drinklist}>Bud light</h2>
          <h2 className={classes.drinklist}>Corona</h2>
          <h2 className={classes.drinklist}>Corona Light</h2>
          <h2 className={classes.drinklist}>Michelob Ultra</h2>
          <h2 className={classes.drinklist}>Miller High Life</h2>
          <h2 className={classes.drinklist}>Yuengling</h2>
          <h2 className={classes.drinklist}>Heineken</h2>
          <h2 className={classes.drinklist}>Guinness</h2>
          <h2 className={classes.drinklist}>Twisted Tea</h2>
          <h2 className={classes.drinklist}>
            Bud Light Seltzer (Cherry/Mango)
          </h2>
          <h2 className={classes.drinklist}>White Claw (Cherry/Mango)</h2>
        </TabbedPanel>

        <TabbedPanel value={value} index={1}>
          <h2 className={classes.drinklist}>Leinenkugel Summer Shandy</h2>
          <h2 className={classes.drinklist}>Bonesaw Squeezins</h2>
          <h2 className={classes.drinklist}>Bonesaw Swoosh</h2>
          <h2 className={classes.drinklist}>Sam Adams Summer Ale</h2>
          <h2 className={classes.drinklist}>Miller Lite</h2>
          <h2 className={classes.drinklist}>Bud Light</h2>
          <h2 className={classes.drinklist}>Budweiser</h2>
          <h2 className={classes.drinklist}>Yuengling</h2>
          <h2 className={classes.drinklist}>Stella</h2>
          <h2 className={classes.drinklist}>Blue Moon</h2>
        </TabbedPanel>

        <TabbedPanel value={value} index={2}>
          <h2 className={classes.drinklist}>Margarita</h2>
          <h2 className={classes.drinklist}>Bloody Mary</h2>
          <h2 className={classes.drinklist}>Martinis</h2>
          <h2 className={classes.drinklist}>Cosmopolitan</h2>
          <h2 className={classes.drinklist}>Manhattan</h2>
          <h2 className={classes.drinklist}>Tequila Sunrise</h2>
          <h2 className={classes.drinklist}>Woo Woo</h2>
          <h2 className={classes.drinklist}>Madori Sour</h2>
          <h2 className={classes.drinklist}>Moscow Mule</h2>
          <h2 className={classes.drinklist}>Paloma</h2>
          <h2 className={classes.drinklist}>June Bug</h2>
          <h2 className={classes.drinklist}>Long Island</h2>
          <h2 className={classes.drinklist}>Bay Breeze</h2>
          <h2 className={classes.drinklist}>White Russian</h2>
          <h2 className={classes.drinklist}>Whiskey Sour</h2>
          <h2 className={classes.drinklist}>Old Fashioned</h2>
          <h2 className={classes.drinklist}>007</h2>
          <h2 className={classes.drinklist}>Jolly Rancher</h2>
        </TabbedPanel>

        <TabbedPanel value={value} index={3}>
          <h2 className={classes.drinklist}>Forestville Chardonnay</h2>
          <h2 className={classes.drinklist}>Forestville White Zinfandel</h2>
          <h2 className={classes.drinklist}>Belmondo Pinot Grigio</h2>
          <h2 className={classes.drinklist}>Rex Goliath Moscato</h2>
          <h2 className={classes.drinklist}>Forestville Merlot</h2>
          <h2 className={classes.drinklist}>Forestville Cabernet</h2>
          <h2 className={classes.drinklist}>Rex Goliath Pinot Noir</h2>
        </TabbedPanel>
      </SwipeableViews>
    </div>
  )
}
