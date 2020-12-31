/**
 * Generated by bindgen.py
 * Date: 2020-07-19 15:06:51.946225
 *
 * Usage in your own code:
 * --------------------------------------------------
 * import bindings from "./bindingSubjects.ts";
 *
 */
import {BehaviorSubject} from 'rxjs';
import {Instruction} from './instructionParser';

export enum CPU_STATES {
  FETCH = "Fetch Next Instruction",
  DECODE_INSTRUCTION = "Decode Instruction",
  EXECUTE = "Execute Instruction",
  WRITE_BACK = "Write Back to Register",
  ADVANCE_PC = "Advanced Program Counter",
  BREAK = "Break"
}

export class Bindings {
  public bufferWriteCallbacks = [];
  public callBufferWriteCallbacks(character) {
    for (const callback of this.bufferWriteCallbacks) {
      callback(character);
    }
  }
  public addBufferWriteCallback(fun) {
    this.bufferWriteCallbacks.push(fun);
  }

  // Memory
  public memory = new BehaviorSubject(Buffer.alloc(512, 0));

  // Registers
  public cpuregs = new BehaviorSubject<number[]>(new Array(32).fill(0));

  // Data path
  public instrMemRead = new BehaviorSubject<number>(null);
  public pc = new BehaviorSubject<number>(0);
  public rd = new BehaviorSubject<number>(null);
  public imm = new BehaviorSubject<number>(null);
  public rs1addr = new BehaviorSubject<number>(null);
  public rs2addr = new BehaviorSubject<number>(null);
  public rs1 = new BehaviorSubject<number>(null);
  public rs2 = new BehaviorSubject<number>(null);
  public func3 = new BehaviorSubject<number>(null);
  public func7 = new BehaviorSubject<number>(null);

  // At ALU
  public immRs2 = new BehaviorSubject<number>(null);
  public op1 = new BehaviorSubject<number>(null);
  public op2 = new BehaviorSubject<number>(null);
  public aluout = new BehaviorSubject<number>(null);
  public pcAluout = new BehaviorSubject<number>(null);
  public muxAluout = new BehaviorSubject<number>(null);
  public regwrite = new BehaviorSubject<number>(null);

  // At load store
  public rs1Imm = new BehaviorSubject<number>(null);
  public memread = new BehaviorSubject<number>(null);

  // Branch
  public branchRs1Rs2BEQ = new BehaviorSubject<number>(null);
  public branchRs1Rs2BLT = new BehaviorSubject<number>(null);
  public branchRs2Rs1BGR = new BehaviorSubject<number>(null);
  public branchFunc3_0 = new BehaviorSubject<number>(null);
  public branchFunc3_12 = new BehaviorSubject<number>(null);
  public branchMuxResult = new BehaviorSubject<number>(null);
  public branchResult = new BehaviorSubject<number>(null);

  // PC
  public branchAddResult = new BehaviorSubject<number>(null);
  public pcAdd = new BehaviorSubject<number>(null);
  public pcAdvOther = new BehaviorSubject<number>(null);
  public pcAdvJALR = new BehaviorSubject<number>(null);
  public pcAdv = new BehaviorSubject<number>(null);

  // State
  public nextCpuState = new BehaviorSubject<CPU_STATES>(CPU_STATES.FETCH);
  public cpuState = new BehaviorSubject<CPU_STATES>(null);
  public cycleComplete = new BehaviorSubject<number>(0);

  // Decoder
  public instruction = new BehaviorSubject<Instruction>(null);
  public instructionName = new BehaviorSubject<string>(null);

  // Can be used in the simulation to get subscriptions to these values
  public allValues = {
    'pc': this.pc,
    'rd': this.rd,
    'imm': this.imm,
    'rs1addr': this.rs1addr,
    'rs2addr': this.rs2addr,
    'rs1': this.rs1,
    'rs2': this.rs2,
    'immrs2': this.immRs2,
    'op1': this.op1,
    'op2': this.op2,
    'aluout': this.aluout,
    'pcaluout': this.pcAluout,
    'muxaluout': this.muxAluout,
    'regwrite': this.regwrite,
    'rs1imm': this.rs1Imm,
    'memread': this.memread,
    'func3': this.func3,
    'func7': this.func7,
    'func3-0': this.branchFunc3_0,
    'func3-12': this.branchFunc3_12,
    'branchresult': this.branchResult,
    'branchadd': this.branchAddResult,
    'pcadd': this.pcAdd,
    'pcadvother': this.pcAdvOther,
    'pcadvjalr': this.pcAdvJALR,
    'pcadv': this.pcAdv,
    'instrmemread': this.instrMemRead,
    'instr': this.instructionName
  }

  public volatileValues = {
    'rd': this.rd,
    'imm': this.imm,
    'rs1addr': this.rs1addr,
    'rs2addr': this.rs2addr,
    'rs1': this.rs1,
    'rs2': this.rs2,
    'immrs2': this.immRs2,
    'op1': this.op1,
    'op2': this.op2,
    'aluout': this.aluout,
    'muxaluout': this.muxAluout,
    'regwrite': this.regwrite,
    'rs1imm': this.rs1Imm,
    'memread': this.memread,
    'func3': this.func3,
    'func7': this.func7,
    'func3-0': this.branchFunc3_0,
    'func3-12': this.branchFunc3_12,
    'branch': this.branchResult,
    'branchadd': this.branchAddResult,
    'instrmemread': this.instrMemRead,
    'noval': this.instruction,
    'instr': this.instructionName
  }

  clearAllVolatileValues() {
    // @ts-ignore
    Object.values(this.volatileValues).forEach((value) => value.next(null));
  }

  clearAllValues() {
    // @ts-ignore
    Object.values(this.allValues).forEach((value) => value.next(null));
    this.cpuregs.next(new Array(32).fill(0));
    this.memory.next(Buffer.alloc(512, 0));
  }

  constructor() {
    // If name changes set this to other subjects
    this.instruction.subscribe((i) => {
      this.instructionName.next(i?.instructionName);
    })
  }


}
