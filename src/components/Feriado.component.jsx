// import React, { useEffect, useState } from 'react';
// import React, { useEffect } from 'react';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';


// export default FeriadosItem;
// NOTE: connect ACTIONS nd REDUCERS to de COMPONENT
// NOTE: connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component);

import * as actions from "../actions/feriados.actions";

const FeriadosItem = (props) => {
  // NOTE: to allow effect for loading data (list) at start
  // const [x, setX] = useState(0); // NOTE: init STATE value
  // setX(5); // NOTE: set STATE value
  useEffect(() => {
    props.getAllFeriados();
  }
    // , [] // NOTE: if empty(not included), implies "didMount"
    // , [x] // NOTE: on "x" changes, invoke: // (kind of observer, I think)
  );

  return (
    <div> Feriado Item : FeriadosItem </div>
  );
};

// const mapStateToProps = (state, ownProps) => {
const mapStateToProps = (state) => {
  return {
    // NOTE: return property "feriadosList" from Feriados state inside combined state
    feriadosList: state.feriadosReducer.list
    // feriadosList: state.FeriadosItem
  };
};
const mapActionsToProps = {
  getAllFeriados: actions.getAll
};
// NOTE: use as: par.getAllFeriados
export default connect(mapStateToProps, mapActionsToProps)(FeriadosItem);

// export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(FeriadosItem);