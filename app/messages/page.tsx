import ComposeBar from "./compose-bar";
import MessagesHeader from "./messages-header";
import SideBar from "./sidebar";

export default function MessagesPage() {
	return (
		<div className="flex">
			<SideBar />
			<div className="h-screen w-full bg-stone-300">
				<MessagesHeader />
				<h1>Direct Messages</h1>
				<ComposeBar />
			</div>
		</div>
	);
}
