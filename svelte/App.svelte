<script>
	import {getNextStep} from './store.js';

	let items = getNextStep();

	function onClick () {}

	async function updateNext () {
		const nextStep = getNextStep();

		if (nextStep){
			items = nextStep;
			window.requestAnimationFrame(updateNext);
		}
	}

	window.requestAnimationFrame(updateNext);
</script>

{#each items as item (item.id)}
	<div>
		<h2>{item.id}</h2>
		<h3>Lorem ipsum</h3>
		<h4>Lorem ipsum</h4>
		<h5>Lorem ipsum</h5>
		<div>
			<div>
				<div>
					<div>
						<p>
							<button on:click={onClick}>Lorem ipsum</button>
							<button on:click={onClick}>Lorem ipsum</button>
							<button on:click={onClick}>Lorem ipsum</button>
							<button on:click={onClick}>Lorem ipsum</button>
							<button on:click={onClick}>Lorem ipsum</button>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
							<span>Lorem ipsum</span>
						</p>
						<div>
							<h2>{item.id}</h2>
							<h3>Lorem ipsum</h3>
							<h4>Lorem ipsum</h4>
							<h5>Lorem ipsum</h5>
							<div>
								<div>
									<div>
										<div>
											<p>
												<button on:click={onClick}>Lorem ipsum</button>
												<button on:click={onClick}>Lorem ipsum</button>
												<button on:click={onClick}>Lorem ipsum</button>
												<button on:click={onClick}>Lorem ipsum</button>
												<button on:click={onClick}>Lorem ipsum</button>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
												<span>Lorem ipsum</span>
											</p>
											<div>
												<h2>{item.id}</h2>
												<h3>Lorem ipsum</h3>
												<h4>Lorem ipsum</h4>
												<h5>Lorem ipsum</h5>
												<div>
													<div>
														<div>
															<div>
																<p>
																	<button on:click={onClick}>Lorem ipsum</button>
																	<button on:click={onClick}>Lorem ipsum</button>
																	<button on:click={onClick}>Lorem ipsum</button>
																	<button on:click={onClick}>Lorem ipsum</button>
																	<button on:click={onClick}>Lorem ipsum</button>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																	<span>Lorem ipsum</span>
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/each}