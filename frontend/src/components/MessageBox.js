import Alert from 'react-bootstrap/Alert';
import ErrorImg from '.././logo192.png';

export default function MessageBox(props) {
  return props.showImg ? (
    <div>
      <Alert variant={props.variant || 'info'}>{props.children}</Alert>
      <img
        src={ErrorImg}
        width="400"
        className="mt-5 rounded mx-auto d-block"
        alt="404"
      />
    </div>
  ) : (
    <Alert variant={props.variant || 'info'}>{props.children}</Alert>
  );
}
