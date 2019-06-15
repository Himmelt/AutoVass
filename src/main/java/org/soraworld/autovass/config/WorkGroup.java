package org.soraworld.autovass.config;

import org.soraworld.hocon.node.Setting;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class WorkGroup {

    @Setting
    private int id = 1;
    @Setting
    private String name = "K1U1A21";
    @Setting
    private ArrayList<SafetyCircuit> safetyCircuits = new ArrayList<>();
    @Setting
    boolean withZAU = true;

    public WorkGroup() {
    }

    public WorkGroup(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public List<String> getCodeLines() {
        return new ArrayList<>();
    }

    public void saveOut(File folder) {
        File awlFile = new File(folder, name + ".src.awl");
        System.out.println("工作组编号:" + id);
        System.out.println("工作组名称:" + name);
        System.out.println("工作组有: " + safetyCircuits.size() + " 个安全回路.");

        try {
            System.out.println("正在生成源代码文件:" + awlFile.getAbsolutePath());
            awlFile.createNewFile();
            System.out.println("生成完毕.");
        } catch (Throwable e) {
            System.out.println("生成异常");
            e.printStackTrace();
        }
    }
}
