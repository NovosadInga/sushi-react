import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={284}
		height={441}
		viewBox="0 0 284 441"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"

	>
		<rect x="15" y="2" rx="0" ry="0" width="250" height="250" />
		<rect x="15" y="263" rx="0" ry="0" width="249" height="30" />
		<rect x="87" y="314" rx="0" ry="0" width="116" height="40" />
		<rect x="118" y="369" rx="0" ry="0" width="148" height="45" />
		<rect x="25" y="368" rx="0" ry="0" width="88" height="45" />
	</ContentLoader>
);

export default Skeleton;
