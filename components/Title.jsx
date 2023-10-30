import '@styles/components/Title.css';

const Title = (props) => {
    return (
        <div className="title">
            <div className="title-seccion">
                <div className="m">M</div>
                <div className="my-title">
          					<span>
            						<span>MY</span>
            						<span className="span">{` `}</span>
          					</span>
                    <span className="resume">{props.name}</span>
                </div>
            </div>
        </div>);
};

export default Title;
