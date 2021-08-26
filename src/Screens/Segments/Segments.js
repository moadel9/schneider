import React, { useState } from "react"
import LoadingBox from "../../components/LoadingBox"

const Segments = () => {
  const [selectedSegment, setSelectedSegment] = useState("")
  const [selectedFunction, setSelectedFunction] = useState("")
  const [selectedChoice, setSelectedChoice] = useState("")
  const [style, setStyle] = useState(false)
  const [output, setOutput] = useState(false)
  const [firstTog, setFirstTog] = useState(true)
  const [secondTog, setSecondTog] = useState(true)
  const [thirdTog, setThirdTog] = useState(false)

  const segments = ["CPG", "WWW"]

  const CPG = {
    functions: ["Monitor and Control", "Manufacturing Efficiency", "Assets Perfomance", "Information Management", "Command and Control"],
    VPMonitorAndControl: ["Increase Operational Productivity and real time decision making", "Reduce Operator Disctraction", "Reduce Engineering Time"],
    VPEfficiency: ["Reduce reporting latency", "Leverage industry best practice", "Reduce total cost of manufacturing ownership"],
    VPAssetsPerfomance: ["Reduce Critical assets downtime", "Ensures maintenance workflow", "Ensures inventory workflow", "Ensures procurement workflow"],
    VPInformationManagement: ["Collects , stores and contextualize data", "Manages late coming data, mismatched system clocks and guard against data loss", "Optimized data storage and flexible data access and security"],
    VPCommandAndControl: ["Full Visibility", "Speed Crisis response", "Optimize performance of employees,assets & operations", "Overcome information silos"],
    MonitorOutput: {
      name: "PLANT SCADA",
      link: "https://www.aveva.com/en/products/plant-scada/?utm_term=%2Bscada&utm_campaign=G_S_A_EMEA_All_Always+On_Solution_Monitor+and+Control_Monitor+and+Control&utm_source=adwords&utm_medium=ppc&hsa_acc=3968997322&hsa_net=adwords&hsa_cam=1459515557&hsa_ad=494374131760&hsa_kw=%2Bscada&hsa_grp=107671946119&hsa_mt=b&hsa_ver=3&hsa_src=g&hsa_tgt=kwd-21206970050&gclid=EAIaIQobChMIloKg4_3M8gIVVuDtCh1CAgcCEAAYASABEgLyVPD_BwE#overview",
    },
    EfficiencyOutput: {
      name: "MES",
      link: "https://www.aveva.com/en/products/manufacturing-execution-system/",
    },
    AssetsOutput: {
      name: "APM",
      link: "https://www.aveva.com/en/products/apm-assessment/#overview",
    },
    InformationOutput: {
      name: "AVEVA HISTORIAN",
      link: "https://www.aveva.com/en/products/historian/",
    },
    ControlOutput: {
      name: "UOS",
      link: "https://www.aveva.com/en/solutions/operations/unified-operations-center",
    },
  }

  const handleChangeSegments = (e) => {
    setOutput(null)
    setSelectedFunction(null)
    setSelectedChoice(null)
    setSelectedSegment(e.target.value)
    setStyle(true)
  }

  const handleChangeFunctions = (e) => {
    setOutput(null)
    setSelectedChoice(null)
    setSelectedFunction(e.target.value)
  }

  const handleChangeChoice = (e) => {
    setSelectedChoice(e.target.value)
  }
  const finishHandler = () => {
    setOutput(true)
    setSecondTog(false)

    setTimeout(() => {
      setThirdTog(true)
    }, 3000)
  }

  console.log("selected>>>", selectedChoice)
  return (
    <div className="container">
      {firstTog && secondTog && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label className="segmentLabel" htmlFor="segments">
            Choose Segment
          </label>

          <select onChange={handleChangeSegments} className={style ? "selectStyle1" : "selectStyle2"} style={{ textAlignLast: "center", margin: "1vh", cursor: "pointer" }}>
            <option disabled selected hidden>
              SEGMENTS
            </option>
            {segments.map((segment, index) => (
              <option style={{ cursor: "pointer" }} key={index} value={segment}>
                {segment}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedSegment && (selectedSegment === "CPG" || selectedSegment === "WWW") && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {firstTog && secondTog && (
            <div className="functionCard" style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ marginTop: 20, marginBottom: 18, fontWeight: "bold" }} className="segmentLabel">
                Please specify needed function
              </label>
              {CPG.functions.map((func) => (
                <div className={func === selectedFunction && "radioStyle1"} style={{ display: "flex", flexDirection: "row", marginLeft: 150, marginBottom: 10, height: 40, width: 320, alignItems: "center", borderRadius: 5 }}>
                  <input style={{ marginTop: 5, marginRight: 5, cursor: "pointer" }} name="functions" checked={func === selectedFunction} onChange={handleChangeFunctions} type="radio" value={func}></input>
                  <label style={{ fontSize: 20, fontWeight: "550" }} htmlFor="func">
                    {func}
                  </label>
                </div>
              ))}
            </div>
          )}
          {selectedFunction && firstTog && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 20 }}>
              <button onClick={() => setFirstTog(false)}>next</button>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column" }}>
            {!firstTog && secondTog && (
              <div className="functionCard" style={{ display: "flex", flexDirection: "column", width: 800, marginBottom: 30 }}>
                <label className="segmentLabel" style={{ marginBottom: 20, marginTop: 30 }}>
                  Choose your value propositions
                </label>
                {selectedFunction === "Monitor and Control" &&
                  CPG.VPMonitorAndControl.map((choice) => (
                    <div style={{ display: "flex", flexDirection: "row", marginLeft: 100, marginBottom: 10, height: 40, alignItems: "center" }}>
                      <input style={{ alignItems: "center", cursor: "pointer" }} type="checkbox" onChange={handleChangeChoice} value={choice}></input>
                      <label style={{ fontSize: 20, fontWeight: "550" }} htmlFor="choice">
                        {choice}
                      </label>
                    </div>
                  ))}

                {selectedFunction === "Manufacturing Efficiency" &&
                  CPG.VPEfficiency.map((choice) => (
                    <div style={{ display: "flex", flexDirection: "row", marginLeft: 100, marginBottom: 10, height: 40, alignItems: "center" }}>
                      <input style={{ alignItems: "center", cursor: "pointer" }} type="checkbox" onChange={handleChangeChoice} value={choice}></input>
                      <label style={{ fontSize: 20, fontWeight: "550" }} htmlFor="choice">
                        {choice}
                      </label>
                    </div>
                  ))}
                {selectedFunction === "Assets Perfomance" &&
                  CPG.VPAssetsPerfomance.map((choice) => (
                    <div style={{ display: "flex", flexDirection: "row", marginLeft: 100, marginBottom: 10, height: 40, alignItems: "center" }}>
                      <input style={{ alignItems: "center", cursor: "pointer" }} type="checkbox" onChange={handleChangeChoice} value={choice}></input>
                      <label style={{ fontSize: 20, fontWeight: "550" }} htmlFor="choice">
                        {choice}
                      </label>
                    </div>
                  ))}
                {selectedFunction === "Information Management" &&
                  CPG.VPInformationManagement.map((choice) => (
                    <div style={{ display: "flex", flexDirection: "row", marginLeft: 100, marginBottom: 10, height: 40, alignItems: "center" }}>
                      <input style={{ alignItems: "center", cursor: "pointer" }} type="checkbox" onChange={handleChangeChoice} value={choice}></input>
                      <label style={{ fontSize: 20, fontWeight: "550" }} htmlFor="choice">
                        {choice}
                      </label>
                    </div>
                  ))}
                {selectedFunction === "Command and Control" &&
                  CPG.VPCommandAndControl.map((choice) => (
                    <div style={{ display: "flex", flexDirection: "row", marginLeft: 100, marginBottom: 10, height: 40, alignItems: "center" }}>
                      <input style={{ alignItems: "center", cursor: "pointer" }} type="checkbox" onChange={handleChangeChoice} value={choice}></input>
                      <label style={{ fontSize: 20, fontWeight: "550" }} htmlFor="choice">
                        {choice}
                      </label>
                    </div>
                  ))}
              </div>
            )}

            {/* ////////////////////////////////////////////
                ///////////////
                 */}

            {selectedChoice && secondTog && (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button onClick={finishHandler}>Get your Recommended Software</button>
              </div>
            )}
            {!secondTog && (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <label style={{ marginBottom: 40 }} className="segmentLabel">
                  Your recommended software is
                </label>
                {!thirdTog && <LoadingBox />}
                {thirdTog && (
                  <>
                    {output && selectedFunction === "Monitor and Control" && (
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <a style={{ marginLeft: "2vw" }} rel="noreferrer" target="_blank" href={CPG.MonitorOutput.link}>
                          {CPG.MonitorOutput.name}
                        </a>
                      </div>
                    )}
                    {output && selectedFunction === "Manufacturing Efficiency" && (
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <a style={{ marginLeft: "2vw" }} rel="noreferrer" target="_blank" href={CPG.EfficiencyOutput.link}>
                          {CPG.EfficiencyOutput.name}
                        </a>
                      </div>
                    )}

                    {output && selectedFunction === "Assets Perfomance" && (
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <a style={{ marginLeft: "2vw" }} rel="noreferrer" target="_blank" href={CPG.AssetsOutput.link}>
                          {CPG.AssetsOutput.name}
                        </a>
                      </div>
                    )}

                    {output && selectedFunction === "Information Management" && (
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <a style={{ marginLeft: "2vw" }} rel="noreferrer" target="_blank" href={CPG.InformationOutput.link}>
                          {CPG.InformationOutput.name}
                        </a>
                      </div>
                    )}

                    {output && selectedFunction === "Command and Control" && (
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <a style={{ marginLeft: "2vw" }} rel="noreferrer" target="_blank" href={CPG.ControlOutput.link}>
                          {CPG.ControlOutput.name}
                        </a>
                      </div>
                    )}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <button
                        onClick={() => {
                          window.location.reload()
                        }}
                      >
                        Go Home
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
export default Segments
