import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Linechart from "./Linegraph";
import Bar from "./Bargraphs";
import fire from "./fire";
import { ScriptSnapshot } from "typescript";
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData("ebay.com", 159, 6.0, 24, 4.0),
    createData("Amazon.com", 237, 9.0, 37, 4.3),
    createData("mynthra.in", 262, 16.0, 24, 6.0)
];
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
};

class componentToPrint extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            born_data: []
        };
    };
};



componentDidMount(); {
    const bornRef = fire.database().ref('born');

    bornRef.on('value', (snapshot) => {
        let born_data = snapshot.val();
        let newState = [];

        for (let born in born_data) {
            newState.push({
                id: born,
                year: born_data[born].year,
                ru: born_data[born].ru,
                ch: born_data[born].ch,
                us: born_data[born].us,
            });
        }

        this.setState({
            born_data: newState
        });
    });
};

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper
    }
}));

export default function ScrollableCenteTabsButtonAuto() {
    const classes = useStyle();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    <div className={classes.root}>
        <AppBar position="static" color="default">
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab label="Overview" {...a11yProps(0)} />
                <Tab label="Audience Insights" {...a11yProps(1)} />
                <Tab label="Traffic journey" {...a11yProps(2)} />
                <Tab label="Top Pages" {...a11yProps(3)} />
                <Tab label="Geo Distribution" {...a11yProps(4)} />
                <Tab label="Sub Domains" {...a11yProps(5)} />
                <Tab label="Bulk Analysis" {...a11yProps(6)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Domain name/URL</TableCell>
                            <TableCell align="right">Visits</TableCell>
                            <TableCell align="right">Unique visitors</TableCell>
                            <TableCell align="right">Pages/Visits</TableCell>
                            <TableCell align="right">Average visit Duration</TableCell>
                            <TableCell align="right">Bounce Rate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Linechart />
            <Bar />
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
      </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
      </TabPanel>
        <TabPanel value={value} index={3}>
            Item Four
      </TabPanel>
        <TabPanel value={value} index={4}>
            Item Five
      </TabPanel>
        <TabPanel value={value} index={5}>
            Item Six
      </TabPanel>
        <TabPanel value={value} index={6}>
            Item Seven
      </TabPanel>
    </div>
    

    <div className={classes.test}>
            return (
        {
            this.state.born_data.map((b) => {
                return (
                <h3>{b.year}</h3>
                )
            })};
        );
    </div>

    );
}

export default componentToPrint;