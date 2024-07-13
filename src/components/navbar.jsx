const naaavbar = ({counterTotal}) => {  //to use props, need to pass as a parameter to the function
//stateless functional components instead of classes
    return (<nav className="navbar navbar-light bg-light">

        <a className="navbar-brand" href="#">Navbarrr  -  {counterTotal}</a>

    </nav>
    );

}

export default naaavbar;