import { OrbitControls } from '@react-three/drei';
import { extend } from '@react-three/fiber';
extend({ OrbitControls });
const Controls = ({ props }) => new OrbitControls({ props });
export default Controls;
