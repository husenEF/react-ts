import { FC, useEffect } from "react";
import {
  makeStyles,
  GridList,
  GridListTile,
  Theme,
  List,
  ListItem,
  Card,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: "calc(100vh - 150px)",
  },
  listContainer: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));
const Home: FC = () => {
  const state = useSelector((state) => state);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Typography>List Contact</Typography>
      <Button onClick={() => dispatch({ type: "INC" })}>
        <Typography>Add</Typography>
      </Button>
      <List className={classes.listContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar src="https://picsum.photos/200" />
            </ListItemAvatar>
            <ListItemText>Refactory</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Home;
