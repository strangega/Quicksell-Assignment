
import NPC from "./icons/No-priority.svg"
import LP from "./icons/Low-Priority.svg"
import MP from "./icons/Medium-Priority.svg"
import HP from "./icons/High-Priority.svg"
import UP from "./icons/Urgent-Priority.svg"
import backlog from "./icons/Backlog.svg"
import Todo from "./icons/To-do.svg"
import InP from "./icons/in-progress.svg"
import Dn from "./icons/Done.svg"
import canceled from "./icons/Cancelled.svg"

export const getPriorityIcon = priority => {
    switch (priority) {
        case "No priority":
            return <img src={NPC} />
        case "Low":
            return <img src={LP} />
        case "Medium":
            return <img src={MP} />
        case "High":
            return <img src={HP} />
        case "Urgent":
            return <img src={UP} />
        default:
            return "..."
    }
}

export const getStatusIcon = priority => {
    switch (priority) {
        case "Backlog":
            return <img src={backlog} />
        case "Todo":
            return <img src={Todo} />
        case "In progress":
            return <img src={InP} />
        case "Done":
            return <img src={Dn} />
        case "Canceled":
            return <img src={canceled} />
        default:
            return "..."
    }
}
