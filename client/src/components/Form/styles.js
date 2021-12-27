import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  box: {
    marginTop: '40px',
    paddingLeft: '400px',
    paddingRight: '400px',
  },
  heading: {
    fontFamily: 'Circular-Loom !important',
    marginBottom: '30px !important',
    fontSize: '30px !important',
  },
  inputDiv: {
    '& div': {
      borderRadius: '10px',
      marginBottom: '20px',
    },
  },
  description: {
    '& input': {
      height: '100px',
    },
  },
  image: {
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '30px',
    border: '2px dashed #000',
    borderRadius: '10px',
    textAlign: 'center',
    opacity: '0.5',
    fontSize: '40px',
    height: '100px',
    '& input[type="file"]': {
      top: 0,
      right: 0,
      minWidth: '100%',
      minHeight: '100%',
      textAlign: 'right',
      filter: 'alpha((opacity = 0))',
      opacity: 0,
      height: '100px',
      outline: 'none',
      background: 'white',
      cursor: 'inherit',
      display: 'block',
      zIndex: '999',
    },
    '& div': {
      position: 'absolute',
      top: '20px',
      left: '20%',
      height: '100px',
    },
  },
  send: {
    borderRadius: '10px !important',
    height: '60px',
    width: '200px',
  },
  clear: {
    marginLeft: '20px !important',
    height: '60px',
    width: '200px',
    borderRadius: '10px !important',
  },
}));
