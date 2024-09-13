import React, { useCallback, useEffect, useState } from "react"
import Header from "./components/Header"
import Grid from "./components/MainPart"
import { GET_TICKETS_URL } from "./constants"
import { loadGrid, mapUsersByUserId } from "./utils"
import "./App.css"

function App() {
  const [tickets, setTickets] = useState([])
  const [userData, setUserData] = useState({})
  const [gridData, setGridData] = useState({})
  const [grouping, setGrouping] = useState("status")
  const [ordering, setOrdering] = useState("priority")
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    fetch(GET_TICKETS_URL)
      .then(resp => resp.json())
      .then(res => {
        const { tickets, users } = res
        setTickets(tickets)
        setUserData(mapUsersByUserId(users))
      })

  }, [])

  useEffect(() => {
    if (!tickets.length) return
    setGridData(loadGrid(tickets, grouping, ordering))
    setLoading(false)
  }, [grouping, ordering, tickets])

  const onSetGrouping = useCallback(value => {
    setLoading(true)
    setGrouping(value)
    saveSettings({ grouping: value })
  }, [])

  const onSetOrdering = useCallback(value => {
    setLoading(true)
    setOrdering(value)
    saveSettings({ ordering: value })
  }, [])

  const saveSettings = useCallback(data => {
    for (let key in data) localStorage.setItem(key, data[key])
  }, [])


  return (
    <div className="App">
      <Header
        grouping={grouping}
        setGrouping={onSetGrouping}
        ordering={ordering}
        setOrdering={onSetOrdering}
      />
      {loading ? (
        "Loading..."
      ) : (
        <Grid gridData={gridData} grouping={grouping} userIdToData={userData} />
      )}
    </div>
  )
}

export default App
