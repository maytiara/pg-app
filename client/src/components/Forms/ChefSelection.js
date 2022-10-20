import React, {useState} from "react";
import { MenuItem, Select } from "@mui/material";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const chefNames = [
	"Chef Alex Yu",
	"Chef Moriah McGrath",
	"Chef Oli Buenviaje",
	"And many more...",
];

function ChefSelection() {

  // Chef selection
	const [chefId, setchefId] = useState('Chef Alex Yu');

	const handleChefName = (event) => {
		const {
			target: { value },
		} = event;
		setchefId(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	return (
		<div>
			<Select
				labelId="chefId"
				id="chefId"
				name="chefId"
				value={chefId ?? null}
				onChange={handleChefName}
				MenuProps={MenuProps}
			>
				{chefNames.map((chefNames) => (
					<MenuItem key={chefNames} value={chefNames}>
						{chefNames}
					</MenuItem>
				))}
			</Select>
		</div>
	);
}

export default ChefSelection;
