import { HashLoader } from 'react-spinners';
import { LoaderSizeProps } from 'react-spinners/helpers/props';

interface Props extends LoaderSizeProps {
  size?: string | number;
  color?: string;
}

function Loader({ size = 100, color = '#54be96', ...rest }: Props) {
  return <HashLoader size={size} color={color} {...rest} />;
}

export default Loader;
