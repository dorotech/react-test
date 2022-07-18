import { Container } from './styles';

interface ISwaper {
  active?: boolean;
  alterActive: () => void;
}

export function ButtonTheme({ active = false, alterActive }: ISwaper) {
  if (active) {
    return (
      <Container className="active" onClick={alterActive}>
        <div>
          <span>ON</span>
          <span className="ball active"></span>
        </div>
        <small>White Mode</small>
      </Container>
    );
  }

  return (
    <Container onClick={alterActive}>
      <div>
        <span className="ball"></span>
        <span>OFF</span>
      </div>
      <small>White Mode</small>
    </Container>
  );
}
