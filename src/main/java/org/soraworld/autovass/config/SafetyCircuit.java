package org.soraworld.autovass.config;

import org.soraworld.hocon.node.Setting;

import java.io.Serializable;
import java.util.ArrayList;

public class SafetyCircuit implements Serializable {

    @Setting
    private int id;
    @Setting
    private ArrayList<WorkStation> workStations = new ArrayList<>();

}
