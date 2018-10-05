import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const Eyeoff: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M6.74 3.455c.196-.03.407-.06.63-.085.223-.026.433-.04.63-.04a5.21 5.21 0 0 1 2.444.577 8.866 8.866 0 0 1 1.937 1.346 10.45 10.45 0 0 1 1.393 1.549c.364.518.628.907.794 1.167-.166.3-.348.596-.545.887-.197.29-.41.55-.638.778a.573.573 0 0 0-.171.49c.02.192.099.34.233.444a.353.353 0 0 0 .195.109c.068.01.132.016.195.016a.81.81 0 0 0 .295-.055.554.554 0 0 0 .25-.21c.29-.332.557-.69.8-1.074.245-.384.486-.778.725-1.183A.524.524 0 0 0 16 7.875a.524.524 0 0 0-.093-.295c-.031-.031-.229-.343-.592-.934-.363-.581-.88-1.217-1.548-1.907-.67-.69-1.487-1.32-2.452-1.89-.965-.571-2.07-.857-3.315-.857a5.88 5.88 0 0 0-1.525.202.592.592 0 0 0-.436.273.739.739 0 0 0-.093.521.723.723 0 0 0 .319.382c.15.088.308.116.474.085zm9.027 11.362L1.167.202a.641.641 0 0 0-.934 0 .641.641 0 0 0 0 .934l2.849 2.848c-.592.54-1.136 1.11-1.635 1.713C.95 6.298.498 6.947.093 7.642A.589.589 0 0 0 0 7.946c0 .098.031.194.093.287.032.073.229.41.592 1.012.363.602.88 1.25 1.548 1.946.67.695 1.487 1.328 2.452 1.898.965.571 2.07.856 3.315.856.695 0 1.37-.098 2.023-.295a6.311 6.311 0 0 0 1.821-.887l2.989 2.988a.755.755 0 0 0 .24.14.7.7 0 0 0 .227.047.732.732 0 0 0 .24-.047.594.594 0 0 0 .227-.14.642.642 0 0 0 0-.934zM6.677 7.58l1.65 1.65a.403.403 0 0 1-.195.07 2.538 2.538 0 0 1-.194.007c-.166 0-.33-.03-.49-.093a1.774 1.774 0 0 1-.444-.249 1.257 1.257 0 0 1-.405-.918c0-.073.013-.146.04-.218a.738.738 0 0 0 .038-.25zM8 12.623c-.892 0-1.707-.192-2.444-.576A8.866 8.866 0 0 1 3.62 10.7a10.45 10.45 0 0 1-1.393-1.548 26.37 26.37 0 0 1-.794-1.183 10.19 10.19 0 0 1 1.144-1.642c.43-.503.91-.973 1.44-1.409L5.68 6.646a2.809 2.809 0 0 0-.304.74 3.173 3.173 0 0 0-.1.785c0 .363.077.706.233 1.027.155.322.368.602.638.84.228.23.5.408.817.538.316.13.64.194.973.194H8c.228 0 .457-.041.685-.124.228-.083.44-.177.638-.28l1.525 1.525a6.324 6.324 0 0 1-1.37.537A5.73 5.73 0 0 1 8 12.623z" />
  </svg>
);

Eyeoff.displayName = "IconEyeoff";

export default Eyeoff;
