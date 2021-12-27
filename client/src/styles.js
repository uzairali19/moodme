import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  appBar: {
    backgroundColor: '#FB3640 !important',
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      fontFamily: 'Circular-Loom',
      color: '#fff',
    },
  },
  create: {
    alignSelf: 'center',
    '& a': {
      textDecoration: 'none',
      fontFamily: 'Circular-Loom',
      color: '#fff',
    },
  },
}));
