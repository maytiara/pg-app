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


function ChefSelection({chefName, items}) {

	//declare a default item and this item will pass the from Reservation component
	const defaulChefSelection = items[0]

  // Chef selection
	const [chefId, setChefId] = useState(defaulChefSelection)
	
	return (
		<div>
			<Select
				id={chefName}
				name={chefName}
				defaultValue={chefId}
				onSelect={e => setChefId(e.target.value)}
				MenuProps={MenuProps}
			>
				{items.map((items) => (
					<MenuItem key={items} value={items}>
						{items}
					</MenuItem>
				))}
			</Select>
		</div>
	);
}

export default ChefSelection;
