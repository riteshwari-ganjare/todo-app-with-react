const Button = (props) => {
  const { bool, arr } = props;
  const real = () => {
    return arr.map((value) => {
        return(<li>{value}</li>);
      
    });
  };
  return <>{bool==="true" ? <ol>{real()}</ol> : <ul>{real()}</ul>}</>;
};

export default Button;
