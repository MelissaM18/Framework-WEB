import photo from '../assets/images/noche.jpeg'

export default function Image(props){
    return(
        <img style={styles.reSize} src={photo} />
    );
}

const styles = {
    reSize: {
        width: 676,
        height: 337,
    },
};
