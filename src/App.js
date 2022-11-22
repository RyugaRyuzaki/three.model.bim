import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Viewer from "./components/Viewer";

const App = () => {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Viewer></Viewer>
				</PersistGate>
			</Provider>
		</>
	);
};

export default App;
