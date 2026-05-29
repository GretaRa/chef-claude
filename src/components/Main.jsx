export default function Main (){
  return (
		<main>
			<form className="add-ingredient-form">
				<input
					type="text"
					placeholder="e.g. oregano"
					aria-label="Add ingredient"
          id="ingredient-input"
				/>
				<button type="submit">+ Add ingredient</button>
			</form>
		</main>
	);
}