import React from 'react';


export const CreateNote = () => {
	return (
		<form>
			<div>
				<h3>Create A Note</h3>
			</div>
			<div>
				<textarea class="form-control" rows="3">
				</textarea>
			</div>
			<button type="submit" class="btn btn-default">Add Note</button>
		</form>
		)
};
